import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const data = {
  activeClients: 11,
  activeAdmins: 4,
  totalExpenses: 965,
  runningProjects: 11,
  upcomingEvents: [
    { title: 'Marketing policy', location: 'Green Road - Dhaka, Bangladesh', date: '28 APR', type: 'Email' },
    { title: 'Accounting policy', location: 'Kolkata, India', date: '2 APR', type: 'Skype' },
    { title: 'Marketing policy', location: 'Madrid - Spain', date: '17 MRC', type: 'Phone' },
  ],
  runningProjectsList: [
    { name: 'Database configuration', status: 'Failed' },
    { name: 'Design tool', status: 'Progressing' },
    { name: 'Internet configuration', status: 'Progressing' },
    { name: 'Banner completion', status: 'Progressing' },
  ]
};

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Dashboard Info */}
      <View style={styles.dashboardHeader}>
        <Text style={styles.title}>CRM Admin Dashboard</Text>
        <Text style={styles.subtitle}>Very detailed & featured admin.</Text>
      </View>

      {/* Cards */}
      <View style={styles.cardsContainer}>
        <Card title="Active Client" value={data.activeClients} />
        <Card title="Active Admin" value={data.activeAdmins} />
        <Card title="Total Expenses" value={`$${data.totalExpenses}`} />
        <Card title="Running Projects" value={data.runningProjects} />
      </View>

      {/* Upcoming Events */}
      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      <FlatList
        data={data.upcomingEvents}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Running Projects */}
      <Text style={styles.sectionTitle}>Running Projects</Text>
      <FlatList
        data={data.runningProjectsList}
        renderItem={({ item }) => <ProjectCard project={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

// Card Component
const Card = ({ title, value }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

// Event Card Component
const EventCard = ({ event }) => (
  <View style={styles.eventCard}>
    <Text style={styles.eventTitle}>{event.title}</Text>
    <Text style={styles.eventDetails}>{event.location}</Text>
    <Text style={styles.eventDate}>{event.date}</Text>
    <TouchableOpacity style={styles.eventButton}>
      <Text style={styles.eventButtonText}>{event.type}</Text>
    </TouchableOpacity>
  </View>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <View style={styles.projectCard}>
    <Text style={styles.projectName}>{project.name}</Text>
    <Text style={[styles.projectStatus, getStatusStyle(project.status)]}>{project.status}</Text>
  </View>
);

const getStatusStyle = (status) => {
  switch (status) {
    case 'Failed':
      return { backgroundColor: 'red' };
    case 'Progressing':
      return { backgroundColor: 'green' };
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  dashboardHeader: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#00796b',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
  },
  cardValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  eventCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDetails: {
    color: '#666',
  },
  eventDate: {
    color: '#999',
  },
  eventButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#00796b',
    borderRadius: 4,
  },
  eventButtonText: {
    color: '#fff',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  projectName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectStatus: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#fff',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default DashboardScreen;
