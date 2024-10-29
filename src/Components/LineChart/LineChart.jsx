import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarks = [
          { id: 1, name: "Alice", mathMarks: 78, physicsMarks: 82, chemistryMarks: 79 },
          { id: 2, name: "Bob", mathMarks: 85, physicsMarks: 76, chemistryMarks: 88 },
          { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 89, chemistryMarks: 94 },
          { id: 4, name: "David", mathMarks: 74, physicsMarks: 72, chemistryMarks: 70 },
          { id: 5, name: "Eve", mathMarks: 88, physicsMarks: 91, chemistryMarks: 85 },
          { id: 6, name: "Frank", mathMarks: 67, physicsMarks: 64, chemistryMarks: 69 },
          { id: 7, name: "Grace", mathMarks: 90, physicsMarks: 85, chemistryMarks: 87 },
          { id: 8, name: "Heidi", mathMarks: 81, physicsMarks: 78, chemistryMarks: 80 },
          { id: 9, name: "Ivan", mathMarks: 76, physicsMarks: 74, chemistryMarks: 73 },
          { id: 10, name: "Judy", mathMarks: 94, physicsMarks: 88, chemistryMarks: 91 }
        ]
      
      
      
    return (
        <div>
           <Lchart width={800} height={600} data={subjectMarks}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
             <Line dataKey="mathMarks" stroke="red"></Line>
             <Line dataKey="chemistryMarks" stroke="black"></Line>
             <Line dataKey="physicsMarks" stroke="green"></Line>
           </Lchart>
        </div>
    );
};

export default LineChart;