import { Grid, Card, Image, Text, Badge, Button, Group } from '@mantine/core';



function ML_Asset_Card_Uno() {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>

        </Card.Section>
  
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>
  
        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
  
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    );
  }

function ML_Asset_Page_container() {
  return (
    <Grid>
      <Grid.Col span={4}>
      <ML_Asset_Card_Uno/>
      </Grid.Col>
      <Grid.Col span={4}>
        <ML_Asset_Card_Uno/>
      </Grid.Col>
      <Grid.Col span={4}>
        <ML_Asset_Card_Uno/>
      </Grid.Col>
    </Grid>
  );
}

export default ML_Asset_Page_container;