/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Grid, TextField, MenuItem, Checkbox, Hidden,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectData } from '../store/selectors';
import { getData } from '../store/actions';
import {
  FilterContainer, SearchContainer, ListContainer, ListItem, HeaderContainer, FilterButton, SearchButton,
} from '../assets/styled';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      name: '',
      companyList: [],
      allData: [],
      jobTitle: '',
      selectedArea: '',
    };
    this.props.getData();
  }

  handleChangeMultipleCompanies = (event, values) => {
    const tempArr = [];
    for (let i = 0; i < values.length; ++i) {
      if (values[i] !== undefined) {
        tempArr.push(values[i].company);
      }
    }
    this.setState({ companyList: tempArr });
  };

  handleSearch = () => {
    const { data } = this.props;
    const { companyList, name } = this.state;

    const newArray = data.filter((listItem) => {
      if (name !== '' && companyList.length === 0) {
        return listItem.name.toLowerCase().includes(name.toLowerCase());
      }
      if (name === '' && companyList.length > 0) {
        return companyList.find((company) => company === listItem.company);
      }
      return (name !== '' && companyList.length > 0)
        ? (
          listItem.name.toLowerCase().includes(name.toLowerCase())
          && companyList.find((company) => company === listItem.company)
        )
        : listItem;
    });
    this.setState({ allData: newArray, showList: true });
  }

  handleFilter = () => {
    const { jobTitle, selectedArea, allData } = this.state;
    const newArray = allData.filter((listItem) => {
      if (jobTitle !== '' && selectedArea === '') {
        return listItem.job.toLowerCase().includes(jobTitle.toLowerCase());
      }
      if (jobTitle === '' && selectedArea !== '') {
        return listItem.area.toLowerCase() === selectedArea.toLowerCase();
      }
      return (jobTitle !== '' && selectedArea !== '') ? (listItem.job.toLowerCase().includes(jobTitle.toLowerCase()) && listItem.area.toLowerCase() === selectedArea.toLowerCase()) : listItem;
    });
    this.setState({ allData: newArray });
  }

  handleClear = () => {
    this.setState({
      jobTitle: '',
      selectedArea: '',
    });
  }

  render() {
    const { showList, jobTitle, selectedArea } = this.state;
    return (
      <div style={{ height: '100%' }}>
        <Grid container>
          <Grid item xs={12}>
            <HeaderContainer>
              <h3 style={{ margin: 10 }}>Header</h3>
            </HeaderContainer>
          </Grid>
          <Grid container item xs={12}>
            {showList && (
              <Hidden xsDown>
                <Grid container item lg={2} sm={3} xs={12}>
                  <FilterContainer>
                    <TextField
                      value={jobTitle}
                      onChange={(e) => this.setState({ jobTitle: e.target.value })}
                      style={{ width: '100%' }}
                      variant="outlined"
                      label="Job title"
                    />
                    <TextField
                      value={selectedArea}
                      select
                      onChange={(e) => this.setState({ selectedArea: e.target.value })}
                      style={{ marginTop: 20, width: '100%' }}
                      variant="outlined"
                      label="Area"
                    >
                      {this.props.data.map((r) => (
                        <MenuItem value={r.area}>{r.area}</MenuItem>
                      ))}
                    </TextField>
                    <FilterButton onClick={this.handleFilter}>Filter</FilterButton>
                    <FilterButton onClick={this.handleClear}>Clear</FilterButton>
                  </FilterContainer>
                </Grid>
              </Hidden>
            )}
            <Grid container item lg={showList ? 10 : 12} sm={showList ? 9 : 12} xs={12}>
              <Grid item xs={12}>
                <SearchContainer>
                  <TextField
                    onChange={(e) => this.setState({ name: e.target.value })}
                    variant="outlined"
                    label="Name"
                  />
                  <Autocomplete
                    multiple
                    disableCloseOnSelect
                    style={{ marginLeft: 20, width: '100%' }}
                    limitTags={2}
                    options={this.props.data}
                    getOptionLabel={(option) => (option !== undefined ? option.company : '')}
                    onChange={this.handleChangeMultipleCompanies}
                    defaultValue={this.state.companyList}
                    renderOption={(option, { selected }) => (
                      <>
                        <Checkbox
                          style={{ marginRight: 8 }}
                          checked={selected}
                          className="yellowCheckbox"
                        />
                        {option.name}
                      </>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Companies"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                  <SearchButton onClick={this.handleSearch}>Search</SearchButton>
                </SearchContainer>
              </Grid>
              {showList && (
                <Hidden smUp>
                  <Grid item xs={12}>
                    <FilterContainer>
                      <TextField
                        onChange={this.handleChangeJobTitle}
                        style={{ width: '100%' }}
                        variant="outlined"
                        label="Job title"
                      />
                      <TextField
                        select
                        onChange={this.handleSelectArea}
                        style={{ marginTop: 20, width: '100%' }}
                        variant="outlined"
                        label="Area"
                      >
                        {this.props.data.map((r) => (
                          <MenuItem value={r.area}>{r.area}</MenuItem>
                        ))}
                      </TextField>
                      <FilterButton onClick={this.handleFilter}>Filter</FilterButton>
                    </FilterContainer>
                  </Grid>
                </Hidden>
              )}
              <Grid item xs={12}>
                {showList && this.state.allData.length > 0 && (
                  <ListContainer>
                    {this.state.allData.map((r) => (
                      <ListItem key={r.id}>
                        <img src={r.image} alt={`${r.id}foto`} />
                        <div className="infoContainer">
                          <p>Name: {r.name}</p>
                          <p>Company: {r.company}</p>
                          <p>Job Description: {r.jobdescription}</p>
                        </div>
                      </ListItem>
                    ))}
                  </ListContainer>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: selectData(),
});

const mapDispatchToProps = (dispatch) => (
  (
    bindActionCreators({
      getData,
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
