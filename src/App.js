import React, { Component } from 'react';
import SelectMoods from './select-moods'
import logo from './logo.svg';
import './antd.css';
import './spacing.css';
import { Tabs, Row, Col, Badge, Icon, Radio, Divider, Button } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentStep: '1',
            stepResults: {}
        }
    }

  next = (val) => {
      console.log(val);
      let currentStepResults = this.state.stepResults;
      currentStepResults.stepOne = val;
      this.setState({currentStep: '2', stepResults: currentStepResults});
  };

  prev = () => {

  };

  tabHeader = (num, txt) => {
      return <span>
                        <Badge count={num} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
          &nbsp;{txt}
                    </span>
  };

  render() {
    return (
      <div className="App">

          <Row type={'flex'} align={'center'} className={'m-t-xl'}>
              <Col span={12} style={{border: '1px solid #ddd'}}>

                  <Tabs activeKey={this.state.currentStep}>

                      <TabPane tab={this.tabHeader(1, 'Select Mood')} key="1" disabled={this.state.currentStep!='1'}>

                          <SelectMoods onNextClick={this.next} onPrevClick={this.prev} />

                      </TabPane>

                      <TabPane tab={this.tabHeader(1, 'Add a note')} key="2" disabled={this.state.currentStep!='2'}>

                          <span>Now show AddNote Component</span>


                      </TabPane>

                      <TabPane tab={this.tabHeader(1, 'View and confirm')} key="3" disabled={this.state.currentStep!='3'}>
                          Content of Tab Pane 3
                      </TabPane>
                  </Tabs>

              </Col>
          </Row>




      </div>
    );
  }
}

export default App;
