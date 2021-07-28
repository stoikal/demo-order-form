import React from 'react';
import Grid from '../Grid';
import Select from '../Select';
import Input from '../Input';
import Section from '../Section';

const DetailSection = () => {
  return (
    <Section title="Detail">
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Select
            label="Name"
            options={[{ value: '', label: 'hello' }]}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Select
            label="Distribution Center"
            options={[{ value: '', label: 'hello' }]}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} hidden>
        <Grid item xs={6}>
          <Select
            label="Payment Type"
            options={[{ value: '', label: 'hello' }]}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Expired Date"
            options={[{ value: '', label: 'hello' }]}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} hidden>
        <Grid item xs={10}>
          <Input label="Notes" multiline rows={4} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default DetailSection;
