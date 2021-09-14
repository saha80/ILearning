def long_substr(data):
    substr = ''
    if len(data) > 1 and len(data[0]) > 0:
        for i in range(len(data[0])):
            for j in range(len(data[0]) - i + 1):
                print(all(data[0][i: i + j] in x for x in data))
                print(data[0][i: i + j])
                if j > len(substr) and all(data[0][i: i + j] in x for x in data):
                    substr = data[0][i: i + j]
    return substr


print(long_substr(['Oh, hello, my friend.',
                   'I prefer Jelly Belly beans.',
                   'When hell freezes over!']))
