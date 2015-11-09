import React from 'react';

export default React.createClass({
    render(){
        let data = this.props.data || [];

        let options = data.map((option) => {
            return <option key={option.id} value={option.id}>{option.name}</option>;
        });

        return(
            <select className={this.props.style} onChange={this.props.onChange}>
                <option value="">{this.props.placeholder}</option>
                {options}
            </select>
        );
    }
});