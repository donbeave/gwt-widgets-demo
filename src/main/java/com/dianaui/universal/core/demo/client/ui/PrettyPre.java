/*
 * #%L
 * Diana UI Core
 * %%
 * Copyright (C) 2014 Diana UI
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
package com.dianaui.universal.core.demo.client.ui;

import com.dianaui.universal.core.client.ui.Pre;
import com.dianaui.universal.core.demo.client.ui.constants.Styles;

/**
 * @author Sven Jacobs
 */
public class PrettyPre extends Pre {

    public PrettyPre() {
        addStyleName(Styles.PRETTYPRINT);
    }

    @Override
    protected void onLoad() {
        super.onLoad();

        // When the widget loads, force the styling of pretty print
        prettyPrint();
    }

    private native void prettyPrint() /*-{
        $wnd.prettyPrint();
    }-*/;
}
