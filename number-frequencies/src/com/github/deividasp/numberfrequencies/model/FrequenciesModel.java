package com.github.deividasp.numberfrequencies.model;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

public class FrequenciesModel {

    private final StringProperty outputProperty = new SimpleStringProperty();

    public void setOutputProperty(String output) {
        outputProperty.set(output);
    }

    public StringProperty getOutputProperty() {
        return outputProperty;
    }

}
