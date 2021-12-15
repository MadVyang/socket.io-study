import socket
import threading

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind(('', 3333))
server_socket.listen()


def handler(client_socket, addr):
    print('connected with', addr)
    try:
        while True:
            data = client_socket.recv(1024)
            print(addr, ':', data)
    finally:
        print('disconnected with', addr)
        client_socket.close()


try:
    print('server is waiting...')
    while True:
        client_socket, addr = server_socket.accept()
        thread = threading.Thread(target=handler, args=(client_socket, addr))
        thread.start()
finally:
    server_socket.close()
