import {Button} from "reactstrap";
import {Link} from "react-router-dom";


function Schedule() {


   return (
      <>
         <h1>Care Schedule</h1>
         <Link className="nav-button" to="/">
            Back to Home
         </Link>
         <br/><br/>
         <div className="grooming-calendar">
            <div className="month">
               <ul>
                  <li className="prev">&#10094;</li>
                  <li className="next">&#10095;</li>
                  <li>
                     February
                  </li>
               </ul>
            </div>

            <ul className="weekdays">
               <li>Mon</li>
               <li>Tue</li>
               <li>Wed</li>
               <li>Thu</li>
               <li>Fri</li>
               <li>Sat</li>
               <li>Sun</li>
            </ul>

            <ul className="days">
               <li style={{visibility: "hidden"}}>0</li>
               <li style={{visibility: "hidden"}}>0</li>
               <li className="active">1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
               <li>6</li>
               <li>7</li>
               <li>8</li>
               <li>9</li>
               <li>10</li>
               <li>11</li>
               <li>12</li>
               <li>13</li>
               <li>14</li>
               <li>15</li>
               <li>16</li>
               <li>17</li>
               <li>18</li>
               <li>19</li>
               <li>20</li>
               <li>21</li>
               <li>22</li>
               <li>23</li>
               <li>24</li>
               <li>25</li>
               <li>26</li>
               <li>27</li>
               <li>28</li>
               <li>29</li>
            </ul>
         </div>
         <br/>
      </>
   )
}

export default Schedule