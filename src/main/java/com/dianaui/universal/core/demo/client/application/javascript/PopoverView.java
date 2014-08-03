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
package com.dianaui.universal.core.demo.client.application.javascript;

import com.dianaui.universal.core.client.ui.Button;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;

/**
 * @author Joshua Godi
 */
public class PopoverView extends ViewImpl implements PopoverPresenter.MyView {

    @UiField
    com.dianaui.universal.core.client.ui.Popover forcePopover;
    @UiField
    Button forceShowButton;
    @UiField
    Button forceHideButton;

    interface Binder extends UiBinder<Widget, PopoverView> {
    }

    @Inject
    PopoverView(final Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));

        forceHideButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(final ClickEvent event) {
                forcePopover.hide();
            }
        });

        forceShowButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(final ClickEvent event) {
                forcePopover.show();
            }
        });
    }
}
