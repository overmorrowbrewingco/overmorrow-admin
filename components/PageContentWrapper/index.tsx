import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';

import { Content, ContentHeader, ContentWrapper } from 'components/UI/AdminLTE';
import { BreadcrumbType } from 'types/Breadcrumb';

interface Props {
  breadcrumbs?: BreadcrumbType[];
  title: string;
}

const PageContentWrapper: React.FC<Props> = ({
  breadcrumbs = [],
  children,
  title,
}) => (
  <ContentWrapper>
    <ContentHeader className="pt-4">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="m-0 text-dark">{title}</h1>
          </Col>

          <Col>
            <Breadcrumb>
              {breadcrumbs.map((bc, index) => (
                <Breadcrumb.Item>
                  <Link as={bc.as} href={bc.href}>
                    <a href={bc.href}>{bc.title}</a>
                  </Link>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </ContentHeader>

    <Content>
      <Container fluid>{children}</Container>
    </Content>
  </ContentWrapper>
);

export default PageContentWrapper;