package com.github.deividasp.numberfrequencies.controller;

import com.github.deividasp.numberfrequencies.model.FrequenciesModel;
import com.github.deividasp.numberfrequencies.util.ParsingUtils;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class FrequenciesController {

    private final FrequenciesModel model;

    public FrequenciesController(FrequenciesModel model) {
        this.model = model;
    }

    public void onListChange(String text) {
        List<Integer> integers = parse(text);

        if (integers.size() < 1)
            return;

        Map<Integer, Long> frequencies = getFrequencies(integers);

        Optional<Integer> min = integers.stream().min(Integer::compare);
        Optional<Integer> max = integers.stream().max(Integer::compare);

        if (!min.isPresent())
            return;

        model.setOutputProperty(graphPrint(min.get(), max.get(), frequencies));
    }

    private List<Integer> parse(String text) {
        text = text.replace(" ", "");

        return Arrays.stream(text.split(",")).filter(s -> ParsingUtils.parseInt(s).isPresent()).map(Integer::valueOf).collect(Collectors.toList());
    }

    private Map<Integer, Long> getFrequencies(List<Integer> integers) {
        return integers.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    }

    private String graphPrint(int min, int max, Map<Integer, Long> frequencies) {
        Optional<Long> maxFrequency = frequencies.values().stream().max(Long::compare);

        if (!maxFrequency.isPresent())
            return null;

        StringWriter stringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(stringWriter);

        for (long freq = maxFrequency.get(); freq != 0; freq--) {
            for (int num = min; num <= max; num++) {
                if (freq <= frequencies.getOrDefault(num, 0L))
                    writer.printf("%5s ", "*");
                else
                    writer.printf("%5s ", " ");
            }

            writer.println();
        }



        IntStream.rangeClosed(min, max).forEach(i -> writer.printf("%5d ", i));

        return stringWriter.toString();
    }

}
