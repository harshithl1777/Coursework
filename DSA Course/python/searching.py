import math


def binarySearch(array, param):
    leftIndex, rightIndex = 0, len(array) - 1
    middleIndex = math.ceil((leftIndex + rightIndex) / 2)
    iterations = 0
    while (
        array[middleIndex] != param
        and leftIndex < rightIndex
        and rightIndex > leftIndex
    ):
        iterations += 1
        if array[middleIndex] > param:
            rightIndex = middleIndex - 1
        else:
            leftIndex = middleIndex + 1
        middleIndex = math.ceil((leftIndex + rightIndex) / 2)
    if array[middleIndex] == param:
        return True, middleIndex, iterations
    else:
        return False, None, iterations


states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
]
found, index, iterations = binarySearch(states, "Wyomin")
print("Value Found?", found)
print("Index?", index)
print("Iterations", iterations)
