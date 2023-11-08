package com.mycompany.java;
import java.util.Scanner;

/**
 *
 * @author OMOBEWAJI
 */
public class assignment {
   
    

public class StudentData {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number of students: ");
        int numberOfStudents = scanner.nextInt();

        String[] names = new String[numberOfStudents];
        int[] testScores = new int[numberOfStudents];

        for (int i = 0; i < numberOfStudents; i++) {
            System.out.println("Enter the name of student " + (i + 1) + ": ");
            names[i] = scanner.next();

            System.out.println("Enter the test score of student " + (i + 1) + ": ");
            testScores[i] = scanner.nextInt();
        }

        System.out.println("\nStudent Data: ");
        for (int i = 0; i < numberOfStudents; i++) {
            System.out.println("Name: " + names[i] + ", Test Score: " + testScores[i]);
        }
    }
}

}