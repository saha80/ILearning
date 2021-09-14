from hashlib import sha3_256
from os import getcwd, listdir
from os.path import isfile


def main():
    for fn in listdir(getcwd()):
        if (not isfile(fn)):
            continue
        with open(fn, "rb") as f:
            print(fn, sha3_256(f.read()).hexdigest())


if __name__ == '__main__':
    main()
