// Source - https://stackoverflow.com/q
// Posted by user3423682, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-21, License - CC BY-SA 3.0

package edu.blastermind.model;

import java.util.Random;

/**
 * Text-based version of the Mastermind game. The hints are simpler in that you
 * know the position of correct pegs (but you know nothing at all about
 * correctly-colored pegs in wrong positions).
 * 
 * @author
 * 
 */
public class BlasterMindGame {

    private static final int NUM_PEGS = 5;
    private String secret;

    /**
     * Creates a new game with a randomized secret consisting of some
     * combination of the letters: A, B, C, D, and/or E
     */
    public BlasterMindGame() {
        Random rng = new Random();

        this.secret = "ABCDE";
        // TODO 7: for-loop to create the secret string
        StringBuffer guess = new StringBuffer("");
        for (int i = 0; i < NUM_PEGS - 1; i++) {
            char currentChar = guess.charAt(i);
            String cs = currentChar + "";
            currentChar = (char) ((char) (currentChar));
            Character A = guess.charAt(0);
            Character B = guess.charAt(1);
            Character C = guess.charAt(2);
            Character D = guess.charAt(3);
            Character E = guess.charAt(4);
            if (cs.matches("0")) {
                guess.append(secret.charAt(A));
            }else if (cs.matches("1")) {
                guess.append(secret.charAt(B));
            }else if (cs.matches("2")) {
                guess.append(secret.charAt(C));
            }else if (cs.matches("3")) {
                guess.append(secret.charAt(D));
            }else if (cs.matches("4")) {
                guess.append(secret.charAt(E));
            }
        }
    }

    /**
     * Tries to guess the secret.
     * 
     * @param guess
     *            a 5-character string made up of only A, B, C, D, or E. Must be
     *            exactly 5 characters long.
     * 
     * @return a 5-character string made up of the characters - and O,
     *         indicating: '-' for an incorrect match in that position 'O' for a
     *         correct match in that position
     */
    public String getEasyHint(String guess) {

        String hint = "";

        return hint;
    }

    /**
     * Lets us know if we've guessed the secret or not.
     * 
     * @param guess
     *            our guess (must be exactly 5 characters long)
     * @return true if correct, false otherwise.
     */
    public boolean isGuessCorrect(String guess) {

        return this.secret.equals(guess);
    }
}
package edu.westga.blastermind.controllers;

import java.util.Scanner;

import edu.westga.blastermind.model.BlasterMindGame;

public class BlasterMind {

    public static void main(String[] args) {

        BlasterMindGame game = new BlasterMindGame();
        Scanner kb = new Scanner(System.in);
        int turns = 1;

        while(true){
        System.out.println("Enter a guess:");
        String guess = kb.next();
        if (!game.isGuessCorrect(guess)){
            System.out.println("You guessed incorrect!");
            String input = kb.next();
            turns++;
        } else if  (game.isGuessCorrect(guess)) break;
        }
        // TODO 6: write the game simulation loop


        System.out.printf("You won in %d turns\n", turns);
    }

}
