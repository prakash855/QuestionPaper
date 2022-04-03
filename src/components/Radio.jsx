import { Component } from "react";
import { Radio, Space } from "antd";

class RadioElement extends Component {
  constructor(props) {
    super();
    this.state = {
      value: 1
    };
  }

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.props.radioIdCB(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;
    console.log(value, "val");
    return (
      <Radio.Group className="radio" onChange={this.onChange} value={value}>
        <Space direction="vertical">
          {this.props.questionoption.map((quest) => (
            <Radio value={quest.optionid}>
              {quest.optionvalue}: {quest.price}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    );
  }
}

export default RadioElement;
