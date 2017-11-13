import sys

def SimpleAdding(num):
    sum = 0
    for x in range(1, num+1):
        sum += x
    # code goes here
    return sum

def main():
    print(SimpleAdding(12))
    print(SimpleAdding(140))

if __name__ == "__main__":
    main()

