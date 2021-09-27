import pandas as pd

# load and rename columns for readability
df = pd.read_csv('data_sheet.csv')
# columns = ['email', 'first', 'last', 'class']
# for rank in range(1, 16):
#     columns.append(f'rank_{rank}')

# df.columns = columns
# df.to_csv('data_sheet.csv')

most_occurrences = []
check = input('What workshop should I check for? ')

for (name, values) in df.iteritems():
    if 'rank' not in name:
        continue
    else:
        occurrences = 0
        for workshop in values:
            if workshop == check:
                occurrences += 1
        print(f'Occurrences of {check} in {name}: {occurrences}')
        