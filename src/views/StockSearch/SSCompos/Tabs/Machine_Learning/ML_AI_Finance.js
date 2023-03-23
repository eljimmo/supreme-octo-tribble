import { AppShell, Navbar, Header, List, Grid, Box, Divider } from '@mantine/core';
import { Card, Icon } from 'semantic-ui-react'
import { CardTitle, CardText, Button, Row, Col  } from 'reactstrap';


const description = [
  'Machine learning is a branch of artificial intelligence that uses statistical models to make predictions. ',
  'In finance, machine learning algorithms are used to detect fraud, automate trading activities, and provide financial advisory services to investors.',
  'Machine learning. This modern technology is responsible for the analytical model building. It uses algorithms and allows the computer to study and find mistakes without being pre-programmed for that.',
].join(' ')


const description1 = [
  'Machine Learning (ML) is a component of artificial intelligence that processes large data sets to detect patterns, generate predictions and recommendations, and improve effectiveness over time.  ',
  'Machine learning is unparalleled in predicting financial trends. By analyzing large data sets, it can predict future trends and identify forthcoming risks and opportunities that drive better investment decisions. ',
].join(' ')


const description2 = [
  'AI applications in finance may create or intensify financial and non-financial risks, and give rise to potential financial consumer and investor protection considerations. The use of AI amplifies risks that could affect a financial institution’s safety and soundness, given the lack of explainability or interpretability of AI model processes, with potential for pro-cyclicality and systemic risk in the markets.  ',
  'AI techniques are applied in asset management and the buy-side activity of the market for asset allocation and stock selection based on ML models ability to identify signals and capture underlying relationships in big data, as well as for the optimisation of operational workflows and risk management.',
].join(' ')

function ML_AI_F() {
  return (
    <div>
      <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
    >
          
     <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      <Grid.Col span={4}>
      <Card>
    <Card.Content header='Analytical Model Building' />
    <Card.Content description={description} />
    <Card.Content extra>
    </Card.Content>
  </Card>
      </Grid.Col>
      <Grid.Col span={4}>
      <Card>
    <Card.Content header='Machine Learning (ML)' />
    <Card.Content description={description1} />
    <Card.Content extra>
    </Card.Content>
  </Card>
      </Grid.Col>
      <Grid.Col span={4}><Card>
    <Card.Content header='AI Applications' />
    <Card.Content description={description2} />
    <Card.Content extra>
    </Card.Content>
  </Card>
  </Grid.Col>
    </Grid>
    </Box>
    <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    <Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
</Row>


  </div>

  );
}

export default ML_AI_F;