import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpenseSummary'

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={23532432434} />)
    expect(wrapper).toMatchSnapshot();

})