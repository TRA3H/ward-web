import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import firestore from '../firebase-config';
import { collection, query, getDocs } from "firebase/firestore";

// Register the components needed for Doughnut chart
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const FeedbackChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const fetchFeedbackStats = async () => {
    const feedbackQuery = query(collection(firestore, "feedback"));
    const querySnapshot = await getDocs(feedbackQuery);
    let correctCount = 0;
    let incorrectCount = 0;

    querySnapshot.forEach((doc) => {
      if (doc.data().correct) correctCount++;
      else incorrectCount++;
    });

    const totalCount = correctCount + incorrectCount;

    setChartData({

      datasets: [{
        data: [correctCount, incorrectCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
      }],
      labels: ['Correct', 'Incorrect']
    });

    // Adding tooltip configuration to show count and integer percentage
    ChartJS.defaults.plugins.tooltip.callbacks.label = function(tooltipItem) {
      let percentage = Math.round(tooltipItem.raw / totalCount * 100);
      return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage}%)`;
    };
  };

  useEffect(() => {
    fetchFeedbackStats();
  }, []);

  return (
    <div className="fade-in" style={{ marginBottom: '50px' }}>
      <Doughnut data={chartData} />
    </div>
  );
};

export default FeedbackChart;
