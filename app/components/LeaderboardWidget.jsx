import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardHeader } from 'material-ui/Card';
import SIUnit from './SIUnit';

const LeaderboardWidget = ({ potMakers }) => (
    <div className="large-card" >
        <Card>
            <CardHeader
                title="Leaderboard"
                avatar="robot.jpg" />
            <Table>
            <TableBody displayRowCheckbox={false} selectable={false}>
              <TableRow selectable={false}>
                <TableHeaderColumn>Who</TableHeaderColumn>
                <TableHeaderColumn># of Pots</TableHeaderColumn>
                <TableHeaderColumn>Total Weight</TableHeaderColumn>
                <TableHeaderColumn># of Cups</TableHeaderColumn>
                <TableHeaderColumn>Heaviest Pot</TableHeaderColumn>
              </TableRow>
                {
                  potMakers.map(function(maker) {
                      if (maker.numberOfPotsMade === 0) {
                          return;
                      }
                      return (<TableRow key={maker.name} selectable={false}>
                          <TableRowColumn>{maker.name}</TableRowColumn>
                          <TableRowColumn>{maker.numberOfPotsMade}</TableRowColumn>
                          <TableRowColumn>
                              <SIUnit number={maker.totalWeightMade} unit={"g"} precision={4} />
                          </TableRowColumn>
                          <TableRowColumn>{maker.numberOfCupsMade}</TableRowColumn>
                          <TableRowColumn>
                              <SIUnit number={maker.largestSinglePot} unit={"g"} precision={4} />
                          </TableRowColumn>
                      </TableRow>);
                  })
                }
            </TableBody>
            </Table>
        </Card>
    </div>
);

LeaderboardWidget.propTypes = {
    potMakers: PropTypes.array.isRequired
};

export default LeaderboardWidget;
