"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.default = [
    {
        "prefix": "constructor",
        "body": [
            "constructor(props) {",
            "\tsuper(props);",
            "\tthis.state = {",
            "\t\t${1:state}: ${2:value}",
            "\t}",
            "}",
        ],
        "description": "A Redux constructor function"
    },
    {
        "prefix": "mapStateToProps",
        "body": [
            "const mapStateToProps = (state, ownProps) => ({",
            "\t${1:prop}: state.${2:prop}",
            "});"
        ],
        "description": "A Redux mapStateToProps function"
    },
    {
        "prefix": "mapDispatchToProps",
        "body": [
            "const mapDispatchToProps = {",
            "\t${1:dispatch1}",
            "};"
        ],
        "description": "A Redux mapDispatchToProps function"
    },
    {
        "prefix": "mapDispatchToPropsBind",
        "body": [
            "const mapDispatchToProps = (dispatch) => ({",
            "\t...bindActionCreators(${1:actionCreators}, dispatch),",
            "});"
        ],
        "description": "A Redux mapDispatchToProps function using bindActionCreators"
    },
    {
        "prefix": "mergeProps",
        "body": [
            "const mergeProps = (stateProps, dispatchProps, ownProps) => ({",
            "\t\t${1:mergeProp}: ${2:mergePropVal}",
            "});"
        ],
        "description": "A Redux mergeProps function"
    },
    {
        "prefix": "connect",
        "body": [
            "export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${1:component});"
        ],
        "description": "A Redux connect function"
    },
    {
        "prefix": "getDerivedStateFromProps",
        "body": [
            "static getDerivedStateFromProps(nextProps, prevState) {",
            "\treturn null;",
            "}"
        ],
        "description": "getDerivedStateFromProps static function"
    },
    {
        "prefix": "componentDidUpdate",
        "body": [
            "componentDidUpdate(prevProps, prevState, snapshot) {",
            "}"
        ],
        "description": "componentDidUpdate lifecycle function"
    }
];