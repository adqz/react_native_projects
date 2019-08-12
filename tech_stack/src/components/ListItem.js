import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { description } = this.props.library;
    if (this.props.selectedLibraryId === this.props.library.id) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>
            {description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    // console.log(this.props.library.id);
    // console.log(`type of variable is:${typeof (this.props.library.id.toString())}`);
    // console.log(this.props);
    // console.log(this.props);
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>

      </TouchableWithoutFeedback>
      
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedLibraryId: state.selectedLibraryId };
};

const styles = {
  titleStyle: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '200',
    paddingLeft: 20,
    paddingRight: 20
  }
};

export default connect(mapStateToProps, actions)(ListItem);
