import React, { useState } from "react";

function Scrapitem(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div style={{ border: "2px solid black", borderRadius: "20px" }} className="totdata">

            <div className="productinfos">
                <div className="scrapData">
                    <div className="container_images">
                        <div className="images">
                            <div className="img">
                            </div>

                            {props.image_table && props.image_table.length > 0 && props.image_table.map((image, index) => (
                                <img key={index} src={image} alt={`product_image_${index}`} />
                            ))}

                        </div>
                    </div>
                    <div className="infosprod">
                        <div className="name">
                            <h3>{props.name && <span>{props.name}</span>}</h3>
                        </div>
                        <div className="priceprod">
                            <h4>{props.price && <span>{props.price}</span>}</h4>
                        </div>
                        <div className="descp">
                            {props.description ? (
                               <div className="descp">
                                    {Array.isArray(props.description) ? (
                                        <div>
                                            {props.description.map((item, index) => (
                                                <p key={index}>
                                                    <strong>{item.label}:</strong> {item.value}
                                                </p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="descrpara">{props.description}</p>
                                    )}
                                </div>
                            ) : (
                                <p className="nodescription">Aucune description disponible</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviewsclients">
                <h2>clients reviews</h2>
                <div className="statistiqu">
                    <div className="totdata">
                        <div className="negtidonne">
                            <div className="nbrcommtneg">
                                {props.info_comment_Sent.dicNegt && (
                                    <h4>nbr comment negative est : {props.info_comment_Sent.dicNegt.nbrComNegt}</h4>
                                )}
                            </div>
                            <div className="exemplecomment">
                                <h4>exemple commentaire</h4>
                                <div className="commentaires">
                                    {props.info_comment_Sent.dicNegt && props.info_comment_Sent.dicNegt.listCommNegt.slice(0, 3).map((comment, index) => (
                                        <p key={index}>{comment}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="postfdonne negtidonne">
                            <div className="nbrcommtneg">
                                {props.info_comment_Sent.dicPost && (
                                    <h4>nbr comment positive : {props.info_comment_Sent.dicPost.nbrComPost}</h4>
                                )}
                            </div>
                            <div className="exemplecomment">
                                <h4>exemple commentaire</h4>
                                <div className="commentaires">
                                    {props.info_comment_Sent.dicPost && props.info_comment_Sent.dicPost.listCommPost.slice(0, 3).map((comment, index) => (
                                        <p key={index}>{comment}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Scrapitem;



