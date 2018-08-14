package com.github.deividasp.numberfrequencies;

import com.github.deividasp.numberfrequencies.controller.FrequenciesController;
import com.github.deividasp.numberfrequencies.model.FrequenciesModel;
import com.github.deividasp.numberfrequencies.view.FrequenciesView;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class FrequenciesApplication extends Application {

    private static final String TITLE = "Number Frequencies";
    private static final int WIDTH = 600;
    private static final int HEIGHT = 400;

    @Override
    public void start(Stage primaryStage) {
        FrequenciesModel model = new FrequenciesModel();
        FrequenciesController controller = new FrequenciesController(model);
        FrequenciesView view = new FrequenciesView(model, controller);

        primaryStage.setTitle(TITLE);
        primaryStage.setResizable(false);
        primaryStage.setAlwaysOnTop(true);
        primaryStage.setScene(new Scene(view.asParent(), WIDTH, HEIGHT));
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }

}
