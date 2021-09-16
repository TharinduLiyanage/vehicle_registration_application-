import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Update} from "./components/Update";
import {AddVehicle} from "./components/AddVehicle";
import {DeleteVehicle} from "./components/DeleteVehicle";
import {ListVehicle} from "./components/ListVehicles";
import {BrowserRouter as Router ,Route, Switch, Link} from 'react-router-dom';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {width : 'inherit'},
    link: {textDecoration:"none", color: "black"}
}))

function App() {
    const classes = useStyles();
    return (
        <Router>
            <div style={{display: "flex"}}>
                <Drawer
                
                    style={{width:"220px", position: 'relative',
                    objectFit: 'cover',
                    display: 'block',
                    height: '10%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    }}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{ paper : classes.drawerPaper} }
                >
                    <List>
                        <Link to={"/addVehicle"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AddCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Register Vehicle"}/>
                            </ListItem>
                        </Link>
                        <Link to={"/update"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ViewModuleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Update Register Details"}/>
                            </ListItem>
                        </Link>
                        <Link to={"/delete"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ViewModuleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Delete Registered Vehicle"}/>
                            </ListItem>
                        </Link>
                    <Link to={"/list"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ViewModuleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Display Registered Vehicle"}/>
                            </ListItem>
                        </Link>
                    </List>

                </Drawer>

                <Switch>
                    <Switch>
                        <Route path="/addVehicle" component={AddVehicle} exact={true}/>
                        <Route path="/update" exact component={Update}/>
                        <Route path="/delete" exact component={DeleteVehicle}/>
                        <Route path="/list" exact component={ListVehicle}/>
                        {/*<Route path="/NavButtons" exact component={<NavButtons/>} />*/}
                    </Switch>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
