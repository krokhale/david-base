import React, { Component } from 'react';
import { Tabs, Row, Col, Badge, Icon, Radio, Divider, Button } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

class SelectMoods extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    onChangeSmileOne = (val) => {
        console.log(val);
        console.log(val.target.value);
        let currentStepOneData = this.state.data;
        currentStepOneData.smileOne = val.target.value;
        this.setState({data: currentStepOneData});
    };

    onChangeSmileTwo = (val) => {
        console.log(val);
        console.log(val.target.value);
        let currentStepOneData = this.state.data;
        currentStepOneData.smileTwo = val.target.value;
        this.setState({data: currentStepOneData});
    };



    render() {
        return (
            <div>

                <Row type={'flex'} align={'center'} className={'p-md'}>
                    <Col span={16}>


                        <Row type={'flex'} align={'center'}>
                            <Col span={10}>
                                <Icon type={'smile'} style={{fontSize: '24px'}}/>
                            </Col>
                            <Col span={14}>
                                <RadioGroup onChange={this.onChangeSmileOne}>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </RadioGroup>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={18}>
                        <Divider />
                    </Col>
                    <Col span={16}>

                        <Row type={'flex'} align={'center'}>
                            <Col span={10}>
                                <Icon type={'smile'} style={{fontSize: '24px'}}/>
                            </Col>
                            <Col span={14}>
                                <RadioGroup onChange={this.onChangeSmileTwo}>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </RadioGroup>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row type={'flex'} align={'center'} className={'p-lg'}>
                    <Col>
                        <Button type={'primary'} onClick={() => {this.props.onNextClick(this.state.data)}}>Next</Button>
                        {/*&nbsp;*/}
                        {/*<Button type={'primary'} ghost>Previous</Button>*/}
                    </Col>
                </Row>

            </div>
        );
    }
}

export default SelectMoods;
