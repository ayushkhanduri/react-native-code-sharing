import React from 'react';

const RequireWrapper= (component) => {
    console.log(Boolean(global.screen));    
    if(global.screen){
        console.log(`../${mode}/components/${component}.component`);
        return require(`../../${mode}/components/${component}.component`);
     }else {
        console.log("native");
        switch (component){
            case "HelloUI" : require('../../native/components/HelloUI.component');
        }
    }
};

export default RequireWrapper;