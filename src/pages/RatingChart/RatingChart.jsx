import React from 'react';
import { useLoaderData } from 'react-router';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Color range for ratings
const colors = {
  red: '#FF0000', // 0-2.5
  orange: '#FF4500', // 2.6-3
  yellow: '#FFA500', // 3.1-3.5
  green: '#32CD32', // 3.6-4
  blue: '#0000FF', // 4.1-4.5
  purple: '#800080', // 4.6-5
};

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const RatingChart = () => {
  const books = useLoaderData(); // Get book data

  const data = books.map((book) => ({
    name: book.bookName,
    rating: parseFloat(book.rating),
  }));

  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold text-center mb-6'>Books Rating Chart</h2>
      <div className="overflow-x-auto"> {/* Wrap in scrollable div */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 100, // Increased bottom margin for full name visibility
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={100} // Increased height for name visibility
            />
            <YAxis 
              domain={[0, 5]} 
              ticks={[0, 2.5, 3, 3.5, 4, 4.5, 5]} // Custom ticks to show the rating intervals
            />
            <Tooltip />
            <Bar
              dataKey="rating"
              shape={<TriangleBar />}
              label={{ position: 'top', fontSize: 12 }}
            >
              {data.map((entry, index) => {
                let fillColor = '';
                // Color logic based on rating value
                if (entry.rating <= 2.5) fillColor = colors.red; // 0-2.5 Red
                else if (entry.rating <= 3) fillColor = colors.orange; // 2.6-3 Orange
                else if (entry.rating <= 3.5) fillColor = colors.yellow; // 3.1-3.5 Yellow
                else if (entry.rating <= 4) fillColor = colors.green; // 3.6-4 Green
                else if (entry.rating <= 4.5) fillColor = colors.blue; // 4.1-4.5 Blue
                else fillColor = colors.purple; // 4.6-5 Purple
                return <Cell key={`cell-${index}`} fill={fillColor} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingChart;
