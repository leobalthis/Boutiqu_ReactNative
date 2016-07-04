package com.boutiq;

import com.facebook.react.ReactActivity;
<<<<<<< ea949b310fe95466c6e615588064f26e14411275
=======
import com.oblador.vectoricons.VectorIconsPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.imagepicker.ImagePickerPackage;
>>>>>>> Boutiq main component, init with Navbar
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
<<<<<<< ea949b310fe95466c6e615588064f26e14411275
        return "boutiq";
=======
        return "Boutiq";
>>>>>>> Boutiq main component, init with Navbar
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
<<<<<<< ea949b310fe95466c6e615588064f26e14411275
            new MainReactPackage()
=======
            new MainReactPackage(),
            new VectorIconsPackage(),
            new ReactMaterialKitPackage(),
            new ImagePickerPackage()
>>>>>>> Boutiq main component, init with Navbar
        );
    }
}
