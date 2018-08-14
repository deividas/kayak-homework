package com.github.deividasp.numberfrequencies.view;

import com.github.deividasp.numberfrequencies.controller.FrequenciesController;
import com.github.deividasp.numberfrequencies.model.FrequenciesModel;

import javafx.geometry.Insets;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;

public class FrequenciesView {

    private final VBox view = new VBox();

    private final FrequenciesModel model;
    private final FrequenciesController controller;

    public FrequenciesView(FrequenciesModel model, FrequenciesController controller) {
        this.model = model;
        this.controller = controller;

        configureStyle();
        setupComponents();
    }

    private void configureStyle() {
        view.setPadding(new Insets(5));
        view.setSpacing(5);
    }

    private void setupComponents() {
        TextField textField = new TextField();
        textField.setPromptText("Enter a list of numbers, separated with a comma");

        view.getChildren().add(textField);

        TextArea textArea = new TextArea();
        textArea.setEditable(false);

        view.getChildren().add(textArea);

        textField.textProperty().addListener((observer, oldText, text) -> controller.onListChange(text));
        model.getOutputProperty().addListener((observer, oldValue, value) -> textArea.setText(value));
    }

    public VBox asParent() {
        return view;
    }

}
