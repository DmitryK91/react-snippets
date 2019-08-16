"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.default = [
    {
        "prefix": "reducer",
        "body": [
            "const ${1:name}InitialState = {}",
            "${export }const ${1:name} = (state = ${1:name}InitialState, action) => {",
            "\tswitch (action.type) {",
            "\t\tcase ${2:ACTION_TYPE_1}:",
            "\t\t\treturn state",
            "\t\tcase ${3:ACTION_TYPE_2}:",
            "\t\t\treturn state",
            "\t\tdefault:",
            "\t\t\treturn state",
            "\t}",
            "}"
        ],
        "description": "A Redux reducer using arrow function notation"
    },
    {
        "prefix": "class",
        "body": [
            "import React, { Component } from 'react'",
            "import { connect } from 'react-redux'",
            "import ${1:component} from '${2:componentPath}'",
            "import {${3:actionCreator}} from '${4:actionCreatorPath}'",
            "",
            "",
            "class ${5:componentName} extends Component {",
            "",
            "\tconstructor(props) {",
            "\t\tsuper(props);",
            "\t\tthis.state = {",
            "\t\t\t${6:state}: ${7:value}",
            "\t\t}",
            "\t}",
            "",
            "\tstatic getDerivedStateFromProps(nextProps, prevState) {",
            "\t\treturn null;",
            "\t}",
            "",
            "\trender() {",
            "",
            "\t\treturn (",
            "\t\t\t<div></div>",
            "\t\t)",
            "\t}",
            "",
            "}",
            "",
            "",
            "const mapStateToProps = (state, ownProps) => ({",
            "\t${8:prop}: state.${9:reducer}.${8:prop}",
            "})",
            "",
            "const mapDispatchToProps = (dispatch, ownProps) => ({",
            "\t${10:dispatch1}: () => dispatch(${3:actionCreator}())",
            "})",
            "",
            "",
            "export default connect(mapStateToProps, mapDispatchToProps)(${5:componentName})"
        ],
        "description": "A Redux component"
    },
    {
        "prefix": "const",
        "body": [
            "import React from 'react'",
            "import { connect } from 'react-redux'",
            "import ${1:component} from '${2:componentPath}'",
            "import {${3:actionCreator}} from '${4:actionCreatorPath}'",
            "",
            "",
            "const ${5:componentName} = ({${6:prop}}) => (",
            "\t<div></div>",
            ")",
            "",
            "",
            "const mapStateToProps = (state, ownProps) => ({",
            "\t${6:prop}: state.${7:reducer}.${6:prop}",
            "})",
            "",
            "const mapDispatchToProps = (dispatch, ownProps) => ({",
            "\t${8:dispatch1}: () => dispatch(${3:actionCreator}())",
            "})",
            "",
            "",
            "export default connect(mapStateToProps, mapDispatchToProps)(${5:componentName})"
        ],
        "description": "A Redux component using arrow function notation"
    }
];