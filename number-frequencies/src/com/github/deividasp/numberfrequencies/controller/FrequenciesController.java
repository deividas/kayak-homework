package com.github.deividasp.numberfrequencies.controller;

import com.github.deividasp.numberfrequencies.model.FrequenciesModel;

public class FrequenciesController {

    private final FrequenciesModel model;

    public FrequenciesController(FrequenciesModel model) {
        this.model = model;
    }

    public void onListChange(String text) {
        model.setOutputProperty(text);
    }

}
