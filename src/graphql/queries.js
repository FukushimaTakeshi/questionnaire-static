// eslint-disable
// this is an auto generated file. This will be overwritten

export const getQuestionnaire = `query GetQuestionnaire($id: ID!) {
  getQuestionnaire(id: $id) {
    id
    name
    questions {
      items {
        id
        type
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const listQuestionnaires = `query ListQuestionnaires(
  $filter: ModelQuestionnaireFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionnaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      questions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    type
    content
    sortNo
    questionnaire {
      id
      name
      questions {
        nextToken
      }
    }
    questionDetail {
      items {
        id
        content
        sortNo
      }
      nextToken
    }
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      content
      sortNo
      questionnaire {
        id
        name
      }
      questionDetail {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuestionDetail = `query GetQuestionDetail($id: ID!) {
  getQuestionDetail(id: $id) {
    id
    content
    sortNo
    question {
      id
      type
      content
      sortNo
      questionnaire {
        id
        name
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
export const listQuestionDetails = `query ListQuestionDetails(
  $filter: ModelQuestionDetailFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      sortNo
      question {
        id
        type
        content
        sortNo
      }
    }
    nextToken
  }
}
`;
