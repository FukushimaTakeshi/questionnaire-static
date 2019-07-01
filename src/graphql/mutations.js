// eslint-disable
// this is an auto generated file. This will be overwritten

export const createQuestionnaire = `mutation CreateQuestionnaire($input: CreateQuestionnaireInput!) {
  createQuestionnaire(input: $input) {
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
export const updateQuestionnaire = `mutation UpdateQuestionnaire($input: UpdateQuestionnaireInput!) {
  updateQuestionnaire(input: $input) {
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
export const deleteQuestionnaire = `mutation DeleteQuestionnaire($input: DeleteQuestionnaireInput!) {
  deleteQuestionnaire(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    type
    content
    sortNo
    questionnaire {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
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
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    type
    content
    sortNo
    questionnaire {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
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
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    type
    content
    sortNo
    questionnaire {
      id
      type
      content
      sortNo
      questionnaire {
        id
        type
        content
        sortNo
      }
      questionDetail {
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
export const createQuestionDetail = `mutation CreateQuestionDetail($input: CreateQuestionDetailInput!) {
  createQuestionDetail(input: $input) {
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
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
export const updateQuestionDetail = `mutation UpdateQuestionDetail($input: UpdateQuestionDetailInput!) {
  updateQuestionDetail(input: $input) {
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
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
export const deleteQuestionDetail = `mutation DeleteQuestionDetail($input: DeleteQuestionDetailInput!) {
  deleteQuestionDetail(input: $input) {
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
        type
        content
        sortNo
      }
      questionDetail {
        nextToken
      }
    }
  }
}
`;
