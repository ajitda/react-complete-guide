import React, {Component} from 'react';

// const withClass = (WrapComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrapComponent {...props}/>
//         </div>
//     )
// }

const withClass = (WrapComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrapComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default withClass;