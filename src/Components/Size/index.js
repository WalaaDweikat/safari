import "./size.css";
import Line from "../../images/Line.png";
export default function Size() {
  return (
    <div className="size">
      <div className="size-1">
        <p>
          Size <span>Clear x</span>
        </p>
        <img src={Line} alt="" />
      </div>
      <div className="size-2">
        <button>XXS</button>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>23</button>
        <button>24</button>
        <button>25</button>
        <button>26</button>
        <button>27</button>
        <button>28</button>
      </div>
    </div>
  );
}
