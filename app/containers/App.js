// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { alertActions } from '../actions';
import { history } from '../helpers';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);

// type Props = {
//   children: React.Node
// };
//
// export default class App extends React.Component<Props> {
//   props: Props;
//
//   render() {
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     );
//   }
// }
