import java.util.*;

public class Searching {

    public static ArrayList<Object> linearSearch(String[] array, String searchParam) {
        int iterations = 0;
        boolean foundParam = false;
        for (String x : array) {
            iterations++;
            if (x == searchParam) {
                foundParam = true;
                break;
            }
        }
        ArrayList<Object> returnValues = new ArrayList<>();
        returnValues.add(foundParam);
        returnValues.add(iterations);
        return returnValues;
    }

    public static ArrayList<Object> binarySearch(String[] array, String searchParam) {
        int rightPointer = array.length - 1;
        int leftPointer = 0;
        int middleIndex = Math.round((rightPointer + leftPointer) / 2);
        int iterations = 0;
        while (array[middleIndex] != searchParam && leftPointer <= rightPointer
                && rightPointer >= leftPointer) {
            iterations++;
            if (searchParam.compareTo(array[middleIndex]) > 0)
                leftPointer = middleIndex + 1;
            else
                rightPointer = middleIndex - 1;
            middleIndex = Math.round((rightPointer + leftPointer) / 2);
        }

        ArrayList<Object> returnValues = new ArrayList<>();
        if (array[middleIndex] == searchParam)
            returnValues.add(middleIndex);
        else
            returnValues.add(false);
        System.out.println(array[middleIndex]);
        returnValues.add(iterations);
        return returnValues;
    }

    public static void main(String[] args) {
        String[] states = {"Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas",
                "California", "Colorado", "Connecticut", "Delaware", "District of Columbia",
                "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
                "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
                "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
                "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
                "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico",
                "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
                "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin",
                "Wyoming"};
        System.out.println("Linear search of American States");
        ArrayList<Object> searchResults = linearSearch(states, "West Virginia");
        System.out.println("Result: " + searchResults.get(0));
        System.out.println("Took " + searchResults.get(1) + " iterations");
        System.out.println("Binary search of American States");
        ArrayList<Object> binarySearchResults = binarySearch(states, "West Virginia");
        System.out.println("Value Found?: " + binarySearchResults.get(0));
        System.out.println("Took " + binarySearchResults.get(1) + " iterations");
    }
}
