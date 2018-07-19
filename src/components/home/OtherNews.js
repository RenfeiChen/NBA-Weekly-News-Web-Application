import React from "react";
import { Link } from "react-router-dom";
import Reveal from "react-reveal"; // REACT REVEAL
import "animate.css/animate.css"; //  REACT REVEAL

const renderOtherNews = ({ otherNews }) => {
    if (otherNews) {
        return otherNews.map(item => {
            return (
                <Reveal key={item.id} effect="animated fadeInUp">
                    <div className="item">
                        <div
                            className="left"
                            style={{
                                background: `url(/images/articles/${item.img})`
                            }}
                        />
                        <div className="right">
                            <h3>{item.title}</h3>
                            <Link
                                to={`/news/${item.id}`}
                                className="category-tag"
                            >
                                {item.category}{" "}
                            </Link>
                            {/* <div className="category-tag"></div> */}
                            <div className="tags">
                                <span>
                                    <i
                                        className="fa fa-eye"
                                        aria-hidden="true"
                                    />{" "}
                                    {item.views}
                                </span>
                                <span>
                                    <i
                                        className="fa fa-thumbs-up"
                                        aria-hidden="true"
                                    />{" "}
                                    {item.likes[0]}
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            );
        });
    }
};

const OtherNews = props => {
    return (
        <div className="other-news">
            <h2>Other News</h2>
            <div className="other-news-items">{renderOtherNews(props)}</div>
        </div>
    );
};

export default OtherNews;
