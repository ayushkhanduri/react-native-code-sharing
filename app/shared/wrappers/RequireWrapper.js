import React from 'react';

const RequireWrapper= (component) => {
    console.log(Boolean(global.screen));
    var p =""    
    if(global.screen){
        console.log(`../${mode}/components/${component}.component`);
        p = `../../${mode}/components/${component}.component`;
        return require( `../../${mode}/components/${component}.component`);
     }else {
        switch (component){
            case "HelloUI" : return require(p.length !==0 ? p :'../../native/components/HelloUI.component');
        }
    }
};

export default RequireWrapper;