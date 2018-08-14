package com.github.deividasp.numberfrequencies.util;

import java.util.Optional;

public class ParsingUtils {

    public static Optional<Integer> parseInt(String input) {
        try {
            return Optional.of(Integer.parseInt(input));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

}
