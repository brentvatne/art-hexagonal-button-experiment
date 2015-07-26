/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

let React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  PropTypes,
  TouchableOpacity,
} = React;

let ReactART = require('ReactNativeART');
let { Surface, Group, Shape, Transform, } = ReactART;

let HexagonalButton = React.createClass({
  getDefaultProps() {
    return {
      backgroundColor: 'orange',
      borderColor: 'white',
      size: 100,
      borderWidth: 2,
    }
  },

  propTypes: {
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    size: PropTypes.number,
    borderWidth: PropTypes.number,
  },

  render() {
    let hexagon = "M34.9548811,0 L0,38.1940124 L14.7793777,87.6720289 L65.2399734,100 L100,61.3957845 L84.6138857,11.2703307 L34.9548811,0 Z";
    let shadow = "M34.9548811,0 L0,38.1940124 L14.7793777,87.6720289 L65.2399734,100 L100,61.3957845 L84.6138857,11.2703307 L34.9548811,0 Z";
    let { backgroundColor, borderColor, size, borderWidth, } = this.props;
    let scale = (size - borderWidth * 2)  / 100.0;
    let transform = new Transform().scale(scale);

    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={{width: size, height: size, backgroundColor: 'transparent'}}>
          <Surface width={size} height={size}>
            <Group x={borderWidth - (borderWidth * scale * 0.22)} y={borderWidth + (borderWidth * scale * 0.22)}>
              <Shape d={shadow}
                     strokeCap="square"
                     strokeJoin="miter"
                     strokeWidth={borderWidth}
                     stroke="#000"
                     opacity={0.2}
                     transform={transform} />
            </Group>
            <Group x={borderWidth} y={borderWidth}>
              <Shape d={hexagon}
                     strokeCap="square"
                     strokeJoin="miter"
                     strokeWidth={borderWidth}
                     stroke={borderColor}
                     fill={backgroundColor}
                     transform={transform} />
            </Group>
          </Surface>

          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>
                Hi Michael!
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

});

let ArtExampleMichael = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <HexagonalButton size={100} borderWidth={10} />
        <View style={{marginVertical: 10}} />
        <HexagonalButton size={150} borderWidth={15} />
        <View style={{marginVertical: 10}} />
        <HexagonalButton size={150} borderWidth={10} />
        <View style={{marginVertical: 10}} />
        <HexagonalButton size={175} borderWidth={8} />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

AppRegistry.registerComponent('ArtExampleMichael', () => ArtExampleMichael);
