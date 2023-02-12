import { Card } from "antd";
import { News } from "../types/newsresponse";

export const NewsCard: React.FC<News> = (data) => (
    <Card
        title={data.parselyMeta["parsely-author"]}
        extra={data.date}
        style={{ width: '100%', marginBottom: '20px' }}
        hoverable
        onClick={() => window.location.href = data.link}
    >
        <h3 dangerouslySetInnerHTML={{__html: data.title.rendered}} style={{padding:'0px 20px'}}/>
        <div className="news-content">
            <img src={data.parselyMeta["parsely-image-url"]} style={{padding: '20px'}} />
            {<div dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} style={{'padding': '0px 20px'}} />}
        </div>

    </Card>
);