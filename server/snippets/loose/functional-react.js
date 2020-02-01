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
            "import React, { Component } from 'react';",
            "import { connect } from 'react-redux';",
            "import { withRouter } from 'react-router';",
            "",
            "import { ${2:dispatch1} } from '${5:actionPath}';",
            "",
            "",
            "class ${1:componentName} extends Component {",
            "",
            "\tstate = {",
            "\t\t${6:state}: ${7:value}",
            "\t}",
            "",
            "\trender() {",
            "",
            "\t\tconst { ${4:prop} } = this.props;",
            "\t\tconst { ${2:state} } = this.state;",
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
            "\t${4:prop}: state.${3:reducer}.${4:prop}",
            "});",
            "",
            "const mapDispatchToProps = {",
            "\t${2:dispatch1}",
            "};",
            "",
            "",
            "export default connect(mapStateToProps, mapDispatchToProps)(withRouter(${1:componentName}));"
        ],
        "description": "A Redux component"
    },
    {
        "prefix": "const",
        "body": [
            "import React from 'react';",
            "import { connect } from 'react-redux';",
            "import { withRouter } from 'react-router';",
            "",
            "import { ${2:dispatch1} } from '${5:actionPath}';",
            "",
            "",
            "const ${1:componentName} = ({ ${4:prop}, ${2:dispatch1} }) => {",
            "",
            "\treturn(",
            "\t\t<div></div>",
            "\t)",
            "}",
            "",
            "",
            "const mapStateToProps = (state, ownProps) => ({",
            "\t${4:prop}: state.${3:reducer}.${4:prop}",
            "});",
            "",
            "const mapDispatchToProps = {",
            "\t${2:dispatch1}",
            "};",
            "",
            "",
            "export default connect(mapStateToProps, mapDispatchToProps)(withRouter(${1:componentName}));"
        ],
        "description": "A Redux component using arrow function notation"
    }
];