

export const routes = {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_project",
      "name": "project",
      "module": false,
      "file": {
        "path": "src/routes/project",
        "dir": "src/routes",
        "base": "project",
        "ext": "",
        "name": "project"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_project_archived_svelte",
          "name": "archived",
          "file": {
            "path": "src/routes/project/archived.svelte",
            "dir": "src/routes/project",
            "base": "archived.svelte",
            "ext": ".svelte",
            "name": "archived"
          },
          "asyncModule": () => import('../src/routes/project/archived.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_project_friends_tutor_svx",
          "name": "friends-tutor",
          "file": {
            "path": "src/routes/project/friends-tutor.svx",
            "dir": "src/routes/project",
            "base": "friends-tutor.svx",
            "ext": ".svx",
            "name": "friends-tutor"
          },
          "asyncModule": () => import('../src/routes/project/friends-tutor.svx'),
          "children": []
        },
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_project_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/project/index.svelte",
            "dir": "src/routes/project",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/project/index.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_project_kakao_api_sandbox_svx",
          "name": "kakao-api-sandbox",
          "file": {
            "path": "src/routes/project/kakao-api-sandbox.svx",
            "dir": "src/routes/project",
            "base": "kakao-api-sandbox.svx",
            "ext": ".svx",
            "name": "kakao-api-sandbox"
          },
          "asyncModule": () => import('../src/routes/project/kakao-api-sandbox.svx'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_project_semantic_commit_writer_svx",
          "name": "semantic-commit-writer",
          "file": {
            "path": "src/routes/project/semantic-commit-writer.svx",
            "dir": "src/routes/project",
            "base": "semantic-commit-writer.svx",
            "ext": ".svx",
            "name": "semantic-commit-writer"
          },
          "asyncModule": () => import('../src/routes/project/semantic-commit-writer.svx'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_project_umcs_svx",
          "name": "umcs",
          "file": {
            "path": "src/routes/project/umcs.svx",
            "dir": "src/routes/project",
            "base": "umcs.svx",
            "ext": ".svx",
            "name": "umcs"
          },
          "asyncModule": () => import('../src/routes/project/umcs.svx'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}
export default routes