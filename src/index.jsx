import React from "react";
import ReactDOM from "react-dom";
import { registerBlockType } from '@wordpress/blocks';
// import { InnerBlocks } from '@wordpress/block-editor';


import Test from "./test";

wp.element.render(
    wp.element.createElement( Test ),
    document.getElementById( 'test-block-root' )
);

registerBlockType( 'test-block/test', {
    title: 'Test block',
    icon: 'universal-access-alt',
    category: 'design',
    example: {},
    edit() {
        // return <div>Add social login block:
        //     {/*<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />*/}
        // </div>;
        return <Test />;
    },
    save() {
        return null;
    },
} );