from Crypto.Util.number import *

with open("flag.txt", "rb") as file:
    message = file.read()


m = bytes_to_long(message)

p = getPrime(256)
q = p
N = p * q

e = 65537

c = pow(m, e, N)

print("e =", e)
print("N =", N)
print("c =", c)
